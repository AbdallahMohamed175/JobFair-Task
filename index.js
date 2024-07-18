

{
    customers = [
        {
            "id": 1,
            "name": "Ahmed Ali"
        },
        {
            "id": 2,
            "name": "Aya Elsayed"
        },

        {
            "id": 3,
            "name": "Mina Adel"
        },
        {
            "id": 4,
            "name": "Sarah Reda"
        },
        {
            "id": 5,
            "name": "Mohamed Sayed"
        }
    ],
        transactions = [
            {
                "id": 1,
                "customer_id": 1,
                "date": "2022-01-01",
                "amount": 1000
            },
            {
                "id": 2,
                "customer_id": 1,
                "date": "2022-01-02",
                "amount": 2000
            },
            {
                "id": 3,
                "customer_id": 2,
                "date": "2022-01-01",
                "amount": 550
            },
            {
                "id": 4,
                "customer_id": 3,
                "date": "2022-01-01",
                "amount": 500
            },
            {
                "id": 5,

                "customer_id": 2,
                "date": "2022-01-02",
                "amount": 1300
            },
            {
                "id": 6,
                "customer_id": 4,
                "date": "2022-01-01",
                "amount": 750
            },
            {
                "id": 7,
                "customer_id": 3,
                "date": "2022-01-02",
                "amount": 1250
            },
            {
                "id": 8,
                "customer_id": 5,
                "date": "2022-01-01",
                "amount": 2500
            },
            {
                "id": 9,
                "customer_id": 5,
                "date": "2022-01-02",
                "amount": 875
            }
        ]
}

var totalAmounts = []
var c1tdate = []
var c1tamount = []
var c2tdate = []
var c2tamount = []
var c3tdate = []
var c3tamount = []
var c4tdate = []
var c4tamount = []
var c5tdate = []
var c5tamount = []

// for(var v=0 ; v< transactions.length ; v++)
// {
//     if (transactions[i].customer_id ==1)
//         { 
//     details.customr1.number(details.customr1.length)=transactions[i].amount
//         }
// }
var check
for (var i = 0; i < customers.length; i++) {
    totalAmounts.push(0)
}

for (var i = 0; i < transactions.length; i++) {

    if (transactions[i].customer_id == 1) {
        c1tdate.push(transactions[i].date)
        c1tamount.push(transactions[i].amount)
    }
    if (transactions[i].customer_id == 2) {
        c2tdate.push(transactions[i].date)
        c2tamount.push(transactions[i].amount)
    }
    if (transactions[i].customer_id == 3) {
        c3tdate.push(transactions[i].date)
        c3tamount.push(transactions[i].amount)
    }
    if (transactions[i].customer_id == 4) {
        c4tdate.push(transactions[i].date)
        c4tamount.push(transactions[i].amount)
    }
    if (transactions[i].customer_id == 5) {
        c5tdate.push(transactions[i].date)
        c5tamount.push(transactions[i].amount)
    }
}



console.log(c1tamount)
for (var i = 0; i < transactions.length; i++) {

    check = transactions[i].customer_id
    totalAmounts[check - 1] += transactions[i].amount
}



cartona = ``
var details1 = ``
var details2 = ``
var details3 = ``
var details4 = ``
var details5 = ``




for (var i = 0; i < c1tamount.length; i++) {
    details1 += `<span class="det ">transaction number : ${i + 1}   <br>  transaction Date : ${c1tdate[i]} <br> transaction mount: ${c1tamount[i]} <hr></span>`
}

for (var i = 0; i < c2tamount.length; i++) {
    details2 += `<span class="det ">transaction number : ${i + 1}   <br>  transaction Date : ${c2tdate[i]} <br> transaction mount: ${c2tamount[i]} <hr></span>`
}
for (var i = 0; i < c3tamount.length; i++) {
    details3 += `<span class="det ">transaction number : ${i + 1}   <br>  transaction Date : ${c3tdate[i]} <br> transaction mount: ${c3tamount[i]} <hr></span>`
}
for (var i = 0; i < c4tamount.length; i++) {
    details4 += `<span class="det ">transaction number : ${i + 1}   <br>  transaction Date : ${c4tdate[i]} <br> transaction mount: ${c4tamount[i]} <hr></span>`
}
for (var i = 0; i < c5tamount.length; i++) {
    details5 += `<span class="det ">transaction number : ${i + 1}   <br>  transaction Date : ${c5tdate[i]} <br> transaction mount: ${c5tamount[i]} <hr></span>`
}
for (var i = 0; i < customers.length; i++) {
    if (i == 0) {
        details0 = details1
    }
    if (i == 1) {
        details0 = details2
    }
    if (i == 2) {
        details0 = details3
    }
    if (i == 3) {
        details0 = details4
    }
    if (i == 4) {
        details0 = details5
    }
    cartona += `
                <tr>
                  <td>${customers[i].id}</td>
                  <td>${customers[i].name}
                <td ><span> ${totalAmounts[i]} <br> <span class="details${i} d-none">${details0}</span >  </span> </td>
<td>    <button  type="button" class= "show${i} btn btn-success ">Total Amount Details</button>  <button  type="button" class= "shown${i} btn btn-danger d-none ">Total Amount Details</button> </td>
           
                </tr>`
}


document.querySelector('#display').innerHTML += cartona
var t1 = document.querySelector('.show0')
var tn1 = document.querySelector('.shown0')
var chart1 = document.querySelector('.chart1')
var det1 = document.querySelector('.details0')
var t2 = document.querySelector('.show1')
var det2 = document.querySelector('.details1')
var chart2 = document.querySelector('.chart2')
var chart3 = document.querySelector('.chart3')
var chart4 = document.querySelector('.chart4')
var chart5 = document.querySelector('.chart5')
var tn2 = document.querySelector('.shown1')
var tn3 = document.querySelector('.shown2')
var tn4 = document.querySelector('.shown3')
var tn5 = document.querySelector('.shown4')
var det3 = document.querySelector('.details2')
var det4 = document.querySelector('.details3')
var det5 = document.querySelector('.details4')

t1.addEventListener('click', function show0() {
    chart1.classList.remove('d-none')
     det1.classList.remove('d-none')
    t1.classList.add('d-none')
     tn1.classList.remove('d-none')
     tn1.addEventListener('click', function show0() {
        chart1.classList.add('d-none')
        det1.classList.add('d-none')
        t1.classList.remove('d-none')
        tn1.classList.add('d-none')


     })
    
})
t2.addEventListener('click', function show1() {
    chart2.classList.remove('d-none')
    det2.classList.remove('d-none')
   t2.classList.add('d-none')
    tn2.classList.remove('d-none')
    tn2.addEventListener('click', function show1() {
        chart2.classList.add('d-none')
        det2.classList.add('d-none')
        t2.classList.remove('d-none')
        tn2.classList.add('d-none')


     })
})
var t3 = document.querySelector('.show2')
t3.addEventListener('click', function show2() {
    chart3.classList.remove('d-none')
    det3.classList.remove('d-none')
   t3.classList.add('d-none')
    tn3.classList.remove('d-none')
    tn3.addEventListener('click', function show2() {
        chart3.classList.add('d-none')
        det3.classList.add('d-none')
        t3.classList.remove('d-none')
        tn3.classList.add('d-none')


     })
})
var t4 = document.querySelector('.show3')
t4.addEventListener('click', function show3() {
    chart4.classList.remove('d-none')
    det4.classList.remove('d-none')
   t4.classList.add('d-none')
    tn4.classList.remove('d-none')
    tn4.addEventListener('click', function show3() {
        chart4.classList.add('d-none')
        det4.classList.add('d-none')
        t4.classList.remove('d-none')
        tn4.classList.add('d-none')


     })
})
var t5 = document.querySelector('.show4')
t5.addEventListener('click', function show5() {
    chart5.classList.remove('d-none')
    det5.classList.remove('d-none')
   t5.classList.add('d-none')
    tn5.classList.remove('d-none')
    tn5.addEventListener('click', function show5() {
        chart5.classList.add('d-none')
        det5.classList.add('d-none')
        t5.classList.remove('d-none')
        tn5.classList.add('d-none')


     })
})

function sortTable(columnIndex) {
    let table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("example");
    switching = true;

    while (switching) {
        switching = false;
        rows = table.rows;

        for (i = 1; i < rows.length - 1; i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[columnIndex];
            y = rows[i + 1].getElementsByTagName("td")[columnIndex];

            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }

        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}




const labels = ['Transaction1', 'transaction2', 'Total Amount'];


var data1= []
for (var i =0; i<c1tamount.length ; i++)
{
    data1.push(c1tamount[i])
}

data1.push(totalAmounts[0])

const ctx = document.getElementById('barChart1');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: '#transactions',
            data:data1,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
            ],
      borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
var data2= []
for (var i =0; i<c2tamount.length ; i++)
{
    data2.push(c2tamount[i])
}

data2.push(totalAmounts[1])

const ctx2 = document.getElementById('barChart2');

new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: '#transactions',
            data:data2,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
            ],
      borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


var data3= []
for (var i =0; i<c3tamount.length ; i++)
{
    data3.push(c3tamount[i])
}

data3.push(totalAmounts[2])

const ctx3 = document.getElementById('barChart3');

new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: '#transactions',
            data:data3,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
            ],
      borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
var data4= []
for (var i =0; i<c4tamount.length ; i++)
{
    data4.push(c4tamount[i])
}

data4.push(totalAmounts[3])

const ctx4 = document.getElementById('barChart4');

new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: ['transaction1','total Amount'],
        datasets: [{
            label: '#transactions',
            data:data4,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
            ],
      borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
var data5= []
for (var i =0; i<c5tamount.length ; i++)
{
    data5.push(c5tamount[i])
}

data5.push(totalAmounts[4])

const ctx5 = document.getElementById('barChart5');

new Chart(ctx5, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: '#transactions',
            data:data5,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
            ],
      borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});



