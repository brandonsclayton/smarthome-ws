

class ArtikCloudAuth{

  constructor(){

    let _this = this;

    _this.authUrl = "https://accounts.artik.cloud";
    _this.clientId = "cbdf047c17a14002830333c0906f1bba";
    _this.clientSecret = "9d4bb87414a64b50a321c3c8bd5c640c";
    _this.redirectUrl = "file:///WORK/github/myGithub/smarthome/index.html";
    
    let url = _this.authUrl + 
        "/authorize" +
        "?prompt=login" +
        "&client_id=" + _this.clientId +
        "&response_type=code" +
        "&account_type=GOOGLE" +
        "&redirect_uri=" + _this.redirectUrl;

    window.location = url;
        
    
    /*
    $.ajax({
      type: "POST",
      url: _this.authUrl + "/token",
      headers: { 
          "Authorization": "Basic " + _this.clientId + _this.clientSecret,
          "Content-Type": "application/x-www-form-urlencoded"
      },
      data : {
          "grant_type": "client_credentials",
          },
      sucess: function(response){
          console.log(response);
        }
      });
    */    
  }

}