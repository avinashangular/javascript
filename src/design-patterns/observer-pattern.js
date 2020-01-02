export var ObserverPattern = (function () {
    var Subject = function () {
        let observers = [];
        let currentValue;
        let notifyObserver = function (observer) {
            let index = observers.indexOf(observer);
            if (index > -1) {
                observers[index].notify(currentValue);
            }
        };
        let notifyAllObservers = function () {
            for (let i = 0; i < observers.length; i++) {
                observers[i].notify(currentValue);
            }
        };
        let subscribe = function (observer) {
            observers.push(observer);
            if (currentValue) {
                notifyObserver(observer);
            }
            return observer;
        };
        let unsubscribe = function (observer) {
            let index = observers.indexOf(observer);
            if (index > -1) {
                observers.splice(index, 1);
            }
        };
        let next = function (value) {
            currentValue = value;
            notifyAllObservers()
        }
        return {
            Subscribe: subscribe,
            Unsubscribe: unsubscribe,
            Next: next
        }
    }


    var Observer = function () {
        return {
            notify: function (index) {
                console.log(`Observer ${index} is notified!`);
            }
        }
    }

    var subjectObj = new Subject();

    var observer1 = new Observer();
    var observer2 = new Observer();
    var observer3 = new Observer();
    var observer4 = new Observer();

    subjectObj.Subscribe(observer1);
    subjectObj.Subscribe(observer2);

    subjectObj.Next('Avinash');

    subjectObj.Subscribe(observer3);
    subjectObj.Subscribe(observer4);

}());