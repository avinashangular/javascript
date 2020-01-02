export var Factory = (function () {
    var NewEngineer = function (name) {
        this.name = name;
        this.profession = 'Engineer';
    }

    var CreateDoctor = function (name) {
        this.name = name;
        this.profession = 'Doctor';
    }

    return {
        CreateProfessionals : function (name, profession) {
            var employee;
            if (profession === 'Engineer') {
                employee = new NewEngineer(name);
            } else if (profession === 'Doctor') {
                employee = new CreateDoctor(name);
            }           

            return employee;
        }
    }
})();



