function AgencyInfo() {
    this.name = 'KMG Instructions';
    this.address = 'Gurgaon';
}

export var Singleton = (function () {
    var instance;
    return {
        getInstance: function () {
            if (!instance) {
                instance = new AgencyInfo();
            }
            return instance;
        }
    }
})();

