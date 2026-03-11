class Service {

    constructor(title, image_url, description, base_price , rating, created_at) {
        this.title = title
        this.image_url = image_url
        this.description = description
        this.base_price = base_price
        this.rating=rating
        this.created_at=created_at
        
    }

}

module.exports = Service;