export class Game {
    constructor(ID, title, genre, price, platform, rating, year, description, isFavorite) {
        this.ID = ID;
        this.title = title;
        this.genre = genre;
        this.price = price;
        this.platform = platform;
        this.rating = rating;
        this.release_date = year;
        this.short_description = description;
        this.isFavorite = isFavorite;
    }
}