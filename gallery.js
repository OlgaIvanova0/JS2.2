//Задание 1 и 2 

class GalleryItem { //данные мини картинок
    constructor(src, className, dataFullImgUrl, alt){
        this.src = src;
        this.className = className;
        this.dataFullImgUrl = dataFullImgUrl;
        this.alt = alt
    }
    render(){
        return `<img src="${this.src} "class="${this.className}" data-full-img-url="${this.dataFullImgUrl}" alt="${this.alt}">`
    }
};

class Gallery {
    constructor (id, items){
        this.id = id;
        this.items = items;
    }
    render(){   //создает миниатюры картинок
        let result = `<div "id="${this.id}">`;
        for (let i = 0; i < this.items.length; i++){
            if(this.items[i] instanceof GalleryItem) {
                result += this.items[i].render()
            }
        }
        result += `</div>`;
        return result
    }
    clickMiniImg(){ //при клике на мини картинку происходят действия
        let imgs = document.getElementsByClassName('imgGallery');
        for(let i = 0; i< imgs.length; i++) {
            imgs[i].addEventListener ('click', () =>{
                this.showCover(); //затемняется экран
                let bigImgUrl = this.getMaxImgUrl(i+1);//определяется url большой картинки для данной маленькой
                this.openBigImg(bigImgUrl);//открывается большая картинка
                let bigImg = document.getElementById('bigImg');
                bigImg.addEventListener('click', () => this.hideCoverAndBigImg()); //запускается функция закрытия большой картики         
            });  
        };       
    }
    
    showCover(){//создает затемнение экрана
        let cowerDiv = document.createElement('div');
        cowerDiv.id = 'cover-div';
        document.body.appendChild(cowerDiv);
    }
    hideCoverAndBigImg(){//удаляет затемнение и большую картинку при закрытии окна
        document.getElementById('bigImg').remove();
        document.getElementById('cover-div').remove();
    }
    getMaxImgUrl(urlNumber){//получаем url большой картинки 
        return `<img src="images/max/${urlNumber}.jpg" id="bigImg">`
    }
    openBigImg(bigImgUrl){//открывает большую картинку
        let blockForBigImg = document.getElementById('cover-div');
        blockForBigImg.innerHTML = bigImgUrl
    }
};

