class Film
{
    constructor(title,director,url)
    {
        this.title = title;
        this.director = director;
        this.url = url;
    }
}

// * Filmerlimizi nesne şeklinde oluşturacağımız için tekrar tekrar nesne oluşturmaktansa öncelikle bir yapıcı metot tanımlayıp filmlerimizi bu metot üzerinde oluşturacağız