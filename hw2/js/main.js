// getting data from form
document.addEventListener('DOMContentLoaded', function(){ //eventListener works when page is loaded

    var createUserForm = document.getElementById("createUserForm"); //get the var from Form
    createUserForm.addEventListener('submit', function(e){ //make eventListener that works on form submit

        e.preventDefault();//stop submit form

        // taking data from userForm and make UserBirthday

        function UserDayOfBirth () {
            var birthYear = document.getElementById("birthYear").value, //get birthYear input value
                birthMonth = document.getElementById("birthMonth").value, //get birthMonth input value
                birthDay = document.getElementById("birthDay").value; //get birthDay input value
                return new Date(birthYear, birthMonth, birthDay);
        }
        console.log(UserDayOfBirth()); //debug

        var name = function () {
            return name = document.getElementById("name").value
        };

        //Create the User constructor

        function User () {
            User.count++; // static property which will count the number of User's instances
            this.id = User.count; // User id

            // this descriptor gets value from dayOfBirth and defines User's age
            Object.defineProperty (user, "age", { // descriptor makes new User's property - User.age
                get: function () {
                    var todayYear = new Date().getFullYear();
                    return todayYear - this.dayOfBirth.getFullYear(); // descriptor get returns age value
                }
            });
            // this descriptor gets value from dayOfBirth and defines User's birthday
            Object.defineProperty(user, "birthday", {
                get: function () {
                    return this.dayOfBirth.toISOString().split('T')[0].slice(-5);
                }
            });

            // these will return the value methods
            this.valueOf = function () { // Number Value
                return this.id;
            };
            this.toString =function () { // String Value
                return this.fullName;
            };
            this.toJSON = function () {
                return [this.id, this.fullName, this.age, this.birthday];
            };

            Object.defineProperties(this, {
                    valueOf : {enumerable: false},
                    toString : {enumerable: false},
                    toJSON : {enumerable: false}
                }
            );
        }

        User.createFromForm = function (name, UserDayOfBirth) {

            var user = new User; // create new instance of User
            user.fullName = name; // User's fullName
            user.dayOfBirth = UserDayOfBirth; // User's date of birth
        };

        User.createEmpty = function () {
          var user = new User;

          user.fullName = 'Hobbit';
          user.dayOfBirth = new Date;

        };

        User.count = 0; // starts User.count



        var vasia = new User ('vasia piatkin', UserDayOfBirth());
        console.log(vasia.id);
        console.log(vasia.dayOfBirth);
        console.log(vasia.birthday);
            });


});


