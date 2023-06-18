import './App.css';
import Images from './Components/Images';

const App = () => {
  const imageUrls = [
    "https://studiowildlife.com/wp-content/uploads/2021/10/245528858_183911853822648_6669060845725210519_n.jpg",
    "https://imgk.timesnownews.com/story/lion123.jpg?tr=w-400,h-300,fo-auto",
    "https://optimise2.assets-servd.host/maniacal-finch/production/animals/african-lion-01-01.jpg?w=1200&auto=compress%2Cformat&fit=crop&dm=1658933674&s=4b63f926a0f524f2087a8e0613282bdb",
    "https://cdn.britannica.com/29/150929-050-547070A1/lion-Kenya-Masai-Mara-National-Reserve.jpg",
    "https://a-z-animals.com/media/2023/04/iStock-1478729005.jpg",
    "https://previews.123rf.com/images/thvideo/thvideo2303/thvideo230348411/200273627-standing-tall-and-regal-atop-a-little-hill-a-lone-lion.jpg",
    "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
    "https://www.lpzoo.org/wp-content/uploads/2022/12/Lioncub_Pilipili.jpg",
    "https://www.daysoftheyear.com/wp-content/uploads/lion-day1-scaled.jpg",
    "https://ichef.bbci.co.uk/images/ic/1200x675/p07h7gzt.jpg",
    "https://media.cntraveler.com/photos/5ade051d5232171fd02d8366/4:3/w_4864,h_3648,c_limit/GettyImages-901864076.jpg",
    "https://i.guim.co.uk/img/media/19e048685db029092e5999e0b393e8318dacf87b/130_238_4779_2867/master/4779.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=bb7708957e0e5876467c4e4751f31cee",
  ];

  return ( 
    <div>
      <Images urls={imageUrls} />
    </div>
  );
}

export default App;