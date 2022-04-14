let movieDetails = [];
class Movie {
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
        this.setPG();
    }
    
    setPG(){
        var obj = {};
        obj.title = this.title;
        obj.studio = this.studio;
        obj.rating = this.rating == "" ? "PG" : this.rating ;
        movieDetails.push(obj);  
    }

    getPG(movieName){
       let result =  movieDetails.filter(elm => ( elm.title.toLowerCase() === movieName.toLowerCase() && elm.rating === "PG"));
       return result;
    }
}
let objInstOne = new Movie("Casino Royale","Eon Productions","PG­13");
let objInstTwo = new Movie("007","Eon Productions","PG");
console.log(objInstOne.getPG("Casino Royale"))
console.log(objInstTwo.getPG("007"))