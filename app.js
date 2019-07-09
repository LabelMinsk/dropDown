//const $dropdownLabel = document.querySelector('dropdown__label');
//const $dropDownMenu = document.querySelector('dropDown__menu');


class DropDown{
  constructor(selector,options){
   this.$dropDown = document.querySelector(selector);
   this.items = options.items;
   this.$dropDown.querySelector('.dropdown__label').textContent = this.items[0].label;


   this.$dropDown.addEventListener('click',event=> {
     if (event.target.classList.contains('dropdown__label')) {
       this.$dropDown.classList.contains('open') ? this.close() : this.open();
     } else if (event.target.tagName.toLowerCase()=== 'li'){
       this.select(event.target.dataset.id);
     }
    });

    const itemsHTML = this.items.map(i =>{
      return `<li data-id="${i.id}">${i.label}</li>`
    }).join(' ');

    this.$dropDown.querySelector('.dropDown__menu').insertAdjacentHTML('afterbegin',
      itemsHTML)
  };

  select(id){
    const item = this.items.find(i => i.id === id);
    this.$dropDown.querySelector('.dropdown__label').textContent = item.label;
    this.close();
  }

  open(){
    this.$dropDown.classList.add('open')
  }
  close(){
    this.$dropDown.classList.remove('open')
  }
}
const dropDonw = new DropDown('#dropDown',{
  items:[
    {label: `Москва`, id: `msk`},
    {label: `Санкт-Петербург`, id: `spb`},
    {label: `Минск`, id: `minsk`}
  ]
});
