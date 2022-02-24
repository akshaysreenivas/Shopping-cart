var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 let products=[
   {
     name:"i Phone 13",
     catogery:"Mobile-phone",
     desciption:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quo molestiae, exercitationem vel voluptate deleniti laboriosam laudantium",
   image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-blue-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1629842712000"
    },
   {
     name:"one plus 9 pro",
     catogery:"Mobile-phone",
     desciption:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quo molestiae, exercitationem vel voluptate deleniti laboriosam laudantium",
     image:"https://m.media-amazon.com/images/I/612ytK4luvL._SL1500_.jpg"
   },
   {
     name:"samsung s22 ultra ",
     catogery:"Mobile-phone",
     desciption:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quo molestiae, exercitationem vel voluptate deleniti laboriosam laudantium",
     image:"https://images.samsung.com/uk/smartphones/galaxy-s22-ultra/buy/02_carousel/04_basic-colors/s22_ultra_productkv_burgundy_mo.jpg"
   },
   {
     name:"poco x3 pro",
     catogery:"Mobile-phone",
     desciption:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quo molestiae, exercitationem vel voluptate deleniti laboriosam laudantium",
     image:"https://m.media-amazon.com/images/I/61sj+WsNkCL._AC_SX522_.jpg"
   }
 ]


  res.render('index', {products,admin:false});
});

module.exports = router;
