import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import * as firebase from 'firebase';

@Injectable({
  providedIn: "root",
})
export class MovieService {
  path = "/anime/";

  constructor(private _db: AngularFirestore) {}

  // GET
  get movieList() {
    return this._db.collection("movies", (ref)=> {
      return ref.orderBy("name");
    });
  }

  get trendList() {
    return this._db.collection("trends", (ref)=> {
      return ref.orderBy("timestamp", "desc").limit(8);
    });
  }

  get animeList() : AngularFirestoreCollection<unknown>{
    return this._db.collection(this.path, (ref)=> {
      return ref.orderBy("name", "asc");
    });
  }

  get lastEpisodes() {
    return this._db.collection("episodes",(ref) => {
      let q = ref.orderBy("timestamp", "desc").limit(12);      
      return q;
    });
  }

  get categoriesList() {
    return this._db.collection("categories");
  }

  // GET WITH QUERY
  getMovie(movie){
    return this._db.collection("movies",(ref) => {
      let q = ref.where('name', '==', movie.anime);
      return q;
    });
  }

  listEpisodes(anime) {
    return this._db.collection("episodes",(ref) => {
      let q = ref.where('anime', '==', anime.name).orderBy("season", "desc").orderBy("episode", "desc");      
      return q;
    });
  }

  getEpisode(episode) {
    return this._db.collection("episodes",(ref) => {
      let q = ref.where('anime', '==', episode.anime).where('season','==',episode.season).where('episode','==',episode.episode);
      return q;
    });
  }

  nextEpisode(last){    
    return this._db.collection("episodes",(ref) => {
      let q = ref.orderBy("timestamp", "desc");  
      q = q.startAfter(last['timestamp']).limit(12);    
      return q;
    });
  }

  prevEpisode(first){    
    return this._db.collection("episodes",(ref) => {
      let q = ref.orderBy("timestamp", "desc");  
      q = q.endBefore(first['timestamp']).limitToLast(12);    
      return q;
    });
  }

  // POST
  addTrend(trend) {                 
    trend["timestamp"] = firebase.firestore.FieldValue.serverTimestamp();    
    const key = this._db.createId();    
    trend["key"] = key; 
    return this._db.collection("trends").doc(key).set(trend);
  }

  addMovie(movie) {
    movie["timestamp"] = firebase.firestore.FieldValue.serverTimestamp();
    movie["searchableIndex"] = this.createIndex(movie.name);
    const key = this._db.createId();    
    movie["key"] = key; 
    return this._db.collection("movies").doc(key).set(movie);
  }

  addAnime(anime) {
    anime["timestamp"] = firebase.firestore.FieldValue.serverTimestamp();
    anime["searchableIndex"] = this.createIndex(anime.name);
    const key = this._db.createId();    
    anime["key"] = key;    
    return  this._db.collection("anime").doc(key).set(anime);    
  }

  addEpisode(episode) {    
    episode["timestamp"] = firebase.firestore.FieldValue.serverTimestamp();
    const key = this._db.createId();    
    episode["key"] = key;    
    return  this._db.collection("episodes").doc(key).set(episode);
  }

  // UPDATE
  updateMovie(movie, key:string) {   
    return this._db.collection("movies").doc(key).update(movie);
  }

  updateAnime(anime, key) {   
    return this._db.collection("anime").doc(key).update(anime);
  }

  updateEpisode(episode, key:string) {    
    return this._db.collection("episodes").doc(key).update(episode);
  }

  // DELETE
  deleteAnime(key){
    return this._db.collection("anime").doc(key).delete();
  }

  deleteEpisode(key){
    return this._db.collection("episodes").doc(key).delete();
  }     

  deleteTrend(key){
    return this._db.collection("trends").doc(key).delete();
  }

  // SEARCH
  searchForAnime(offset) {    
    return this._db.collection("anime",(ref) => {      
      let q  = ref.orderBy(`searchableIndex.${offset}`).limit(5);      
      return q;
    });
  }

  createIndex(title){
    const arr = title.toLowerCase().split('');
    const searchableIndex = {};

    let prevKey = '';

    for (const char of arr){
      const key = prevKey + char;
      searchableIndex[key] = true;
      prevKey = key;
    }

    return searchableIndex;
  }

}
