let users = [
    {
      name: "John Doe",
      age: 30,
      profession: "Software Developer",
      address: "123 Main St, Cityville"
    },
    {
      name: "Jane Smith",
      age: 25,
      profession: "Graphic Designer",
      address: "456 Oak St, Townsville"
    },
    {
      name: "Bob Johnson",
      age: 35,
      profession: "Teacher",
      address: "789 Pine St, Villageton"
    }
  ];
  let people = document.getElementById("people");
  let addresses = document.getElementById("addresses");

  for (var i = 0; i < users.length; i++) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(users[i].name + ", " + users[i].age + ", " + users[i].profession)); 
    people.appendChild(div);

    let div2 = document.createElement("div");
    div2.appendChild(document.createTextNode(users[i].address)); 
    addresses.appendChild(div2);
  }