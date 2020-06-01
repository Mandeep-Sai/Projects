// AIzaSyCOkjTz6RSQBRGtI63oiP4i4UtSp8WoXgQ



window.onload = ()=>{
  var map;
  var home ={
    lat:52.5200,
    lng : 13.4050
  } 
  initMap(home)
}
const initMap = (home)=>{
  map = new google.maps.Map(document.querySelector('#map'),{
    center : home,
    zoom :8
  })
  var markers = [{
    coords: home,
    iconImage : 'https://img.icons8.com/bubbles/0.45x/school.png',
    content :'<p>Strive School</p>'
  }]
  for(let i=0;i<markers.length;i++){
    addMarker(markers[i])
  }

  function addMarker(props){
    var marker =  new google.maps.Marker({
      position: props.coords,
       map: map, 
       
    });
    if (props.iconImage) {
      marker.setIcon(props.iconImage)
    }
    if (props.content) {
      var infoWindow = new google.maps.InfoWindow({
        content : props.content
      })
      marker.addListener('click',function(){
        infoWindow.open(map,marker)
      })
    }
  }
  let joinBtn = document.querySelector('#joinBtn')
      var url = 'https://maps.googleapis.com/maps/api/geocode/json'
      joinBtn.addEventListener('click',function(e){
        event.preventDefault();
        let place = document.querySelector('#location').value
        let name = document.querySelector('#name').value
        geoCode(url,place,name)       
      })
  const geoCode=(url,place,name) =>{
    axios.get(url,{
      params :{
        address : place,
        key : 'AIzaSyCOkjTz6RSQBRGtI63oiP4i4UtSp8WoXgQ'
      }
    }).then(response => {
      let coordinates =  response.data.results[0].geometry.location
      let marker ={
        coords : coordinates,
        content : `<p>${name} </p>`
      }
      console.log(marker)
      addMarker(marker)
    })
  
  }
}

// 


