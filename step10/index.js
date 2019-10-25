const R = require('ramda')

const expectData = {
    ageLt18: [
        {name: "Uktg", age: 17},
        {name: "3U5", age: 17},
        {name: "Hu8M", age: 17},
        {name: "Z2d", age: 17},
        {name: "n0ap", age: 17},
        {name: "ptTc", age: 17},
        {name: "Hqn", age: 17},
        {name: "QC3", age: 17}
    ],
    males: [
        {sex: "M", name: "vyo", age: 18, grade: 72},
        {sex: "M", name: "Uktg", age: 17, grade: 86},
        {sex: "M", name: "3U5", age: 17, grade: 82},
        {sex: "M", name: "OVfZ", age: 19, grade: 54},
        {sex: "M", name: "5Rx", age: 18, grade: 92},
        {sex: "M", name: "8GPC", age: 18, grade: 79},
        {sex: "M", name: "Z2d", age: 17, grade: 82},
        {sex: "M", name: "QyKY", age: 19, grade: 59},
        {sex: "M", name: "VT1", age: 19, grade: 89},
        {sex: "M", name: "ptTc", age: 17, grade: 65},
        {sex: "M", name: "Xvhf", age: 18, grade: 65},
        {sex: "M", name: "wOR", age: 19, grade: 78},
        {sex: "M", name: "Hqn", age: 17, grade: 74}
    ],
    top10: [
        {name: "5Rx", grade: 92},
        {name: "VT1", grade: 89},
        {name: "gZW", grade: 87},
        {name: "Uktg", grade: 86},
        {name: "3U5", grade: 82},
        {name: "Z2d", grade: 82},
        {name: "NqXw", grade: 79},
        {name: "8GPC", grade: 79},
        {name: "wOR", grade: 78},
        {name: "jXgh", grade: 77}
    ]
};

const data = [
    {
        sex: "M",
        name: "vyo",
        age: 18,
        grade: 72
    },
    {
        sex: "M",
        name: "Uktg",
        age: 17,
        grade: 86
    },
    {
        sex: "F",
        name: "gZW",
        age: 18,
        grade: 87
    },
    {
        sex: "F",
        name: "NqXw",
        age: 19,
        grade: 79
    },
    {
        sex: "M",
        name: "3U5",
        age: 17,
        grade: 82
    },
    {
        sex: "M",
        name: "OVfZ",
        age: 19,
        grade: 54
    },
    {
        sex: "F",
        name: "Hu8M",
        age: 17,
        grade: 62
    },
    {
        sex: "M",
        name: "5Rx",
        age: 18,
        grade: 92
    },
    {
        sex: "M",
        name: "8GPC",
        age: 18,
        grade: 79
    },
    {
        sex: "M",
        name: "Z2d",
        age: 17,
        grade: 82
    },
    {
        sex: "M",
        name: "QyKY",
        age: 19,
        grade: 59
    },
    {
        sex: "M",
        name: "VT1",
        age: 19,
        grade: 89
    },
    {
        sex: "F",
        name: "n0ap",
        age: 17,
        grade: 58
    },
    {
        sex: "M",
        name: "ptTc",
        age: 17,
        grade: 65
    },
    {
        sex: "M",
        name: "Xvhf",
        age: 18,
        grade: 65
    },
    {
        sex: "F",
        name: "uMe1",
        age: 18,
        grade: 56
    },
    {
        sex: "F",
        name: "jXgh",
        age: 18,
        grade: 77
    },
    {
        sex: "M",
        name: "wOR",
        age: 19,
        grade: 78
    },
    {
        sex: "M",
        name: "Hqn",
        age: 17,
        grade: 74
    },
    {
        sex: "F",
        name: "QC3",
        age: 17,
        grade: 59
    }
]

// let arr = R.filter(R.lt(R.props('age'), 18), data)
// console.log(arr)

function greet() {
    var reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ')
    console.log(reply);
}

var obj = {
    animal: 'cats', sleepDuration: '12 and 16 hours'
}

// greet.call(obj)

Function.prototype.mtsCall = function (context) {
    context = context ? Object(context) : window
    context.fn = this
    let args = [...arguments].slice(1)
    let r = context.fn(args)
    delete context.fn
    return r
}

greet.mtsCall(obj)

Function.prototype.mtsApply = function (context) {
    context = context ? Object(context) : window
    context.fn = this
    let args = [...arguments][1]
    if (!args) {
        context.fn()
    }
    let r = context.fn(args)
    delete context.fn
    return r
}



