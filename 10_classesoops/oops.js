const user = {
    username : "Rishabh",
    loginCount : 5,
    SignedIn : true,

    getUserDetails: function(){
        // console.log("Got the user details");
        console.log(`username ${this.username}`);
        
        
    }
}
 console.log(user.username);
 console.log(user.getUserDetails());
 
 
