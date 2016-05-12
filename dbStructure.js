var UserSchema = new Schema({
    Login: String,
    Password: String,
    ValidateDate: Date,
    LastLogin: Date,    
});

var ArtistSchema = new Schema({
    Name: String,
    Bio: String,
    ArtPhotoPhat: String,
   Album: [{
       Title: String,
       Year: Number,
       ImagePath: String,
       ProductionDirector: String,
       RecorderDirector: String,
       MixEngeeniring: String,
       Musics:[{
           SongName: String,
       }]
   }],
   Schedule: [{
       
   }]
});