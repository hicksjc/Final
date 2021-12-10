function navToPage(pageName) {
  $.get(`pages/${pageName}/${pageName}.html`, function (data) {
    console.log(data);
    $("#app").html(data);
  });
}

function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#/", "");
  if (pageID == "") {
    navToPage("products");
    loadBrowse();
  } else {
    navToPage(pageID);
    loadBrowse();
  }
}

function initListen() {
  $(window).on("hashchange", route);
  route();
}

function initFirebase() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log("connected");
      $("#log-out").css("display", "block");
      $("#login").css("display", "none");
      $("#signup").css("display", "none");
    } else {
      console.log("user is not there");
      $("#log-out").css("display", "none");
      $("#login").css("display", "inline-block");
      $("#signup").css("display", "inline-block");
    }
  });
}

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

var cartCounter = 0;

function addToCart(e) {
  let btnID = e.currentTarget.id;
  cartCounter++;
  if (btnID == "buy") {
    $("#counter").append(
      `<div id="counter${cartCounter}">${cartCounter}</div>`
    );
  }
}

function signOut() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
      console.log("signed out");
    })
    .catch((error) => {
      // An error happened.
      console.log(error);
    });
}

function loginSwitch() {
  $("button").click(function (e) {
    e.preventDefault();
    let btnID = e.currentTarget.id;
    if (btnID == "signup") {
      $(".sign-up").css("display", "block");
      $(".log-in").css("display", "none");
      $(".sign-up").attr("align", "center");
    } else if (btnID == "login") {
      $(".log-in").css("display", "block");
      $(".sign-up").css("display", "none");
      $(".log-in").attr("align", "center");
    }
  });
}

function showDiv(e) {
  $("#login-content").css("display", "inline-block");
}

function closeDiv(e) {
  let btnID = e.currentTarget.id;
  if (btnID == "close") {
    $("#login-content").css("display", "none");
  }
}

function createUser(e) {
  let password = $("#signPassword").val();
  let email = $("#signEmail").val();
  let fName = $("#fname").val();
  let lName = $("#lname").val();
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(userCredential.user);
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
}

function loadBrowse() {
  $.getJSON("data/data.json", function (coffee) {
    console.log(coffee.COFFEE_MAKER1);

    $.each(coffee.COFFEE_MAKER1, function (index, coffee) {
      $("#Cafe").append(
        `<div class="product-title"><h3>${coffee.name}</h3></div>
            <div class="product-price"><h3>${coffee.cost}</h3></div>
            <div class="product-button">
            <button onclick="addToCart(event);" id="buy">Buy Now</button>
        </div>`
      );
    });
  });
  $.getJSON("data/data.json", function (coffee) {
    $.each(coffee.COFFEE_MAKER2, function (index, coffee) {
      console.log("coffee " + coffee.COFFEE_MAKER2);
      $("#Duo").append(
        `<div class="product-title"><h3>${coffee.name}</h3></div>
            <div class="product-price"><h3>${coffee.cost}</h3></div>
            <div class="product-button">
            <button onclick="addToCart(event);" id="buy">Buy Now</button>
        </div>`
      );
    });
  });
  $.getJSON("data/data.json", function (coffee) {
    $.each(coffee.COFFEE_MAKER3, function (index, coffee) {
      console.log("coffee " + coffee.COFFEE_MAKER3);
      $("#Classic").append(
        `<div class="product-title"><h3>${coffee.name}</h3></div>
            <div class="product-price"><h3>${coffee.cost}</h3></div>
            <div class="product-button">
            <button onclick="addToCart(event);" id="buy">Buy Now</button>
        </div>`
      );
    });
  });
  $.getJSON("data/data.json", function (coffee) {
    $.each(coffee.COFFEE_MAKER4, function (index, coffee) {
      $("#Duo_Two").append(
        `<div class="product-title"><h3>${coffee.name}</h3></div>
            <div class="product-price"><h3>${coffee.cost}</h3></div>
            <div class="product-button">
            <button onclick="addToCart(event);" id="buy">Buy Now</button>
        </div>`
      );
    });
  });
  $.getJSON("data/data.json", function (coffee) {
    $.each(coffee.COFFEE_MAKER5, function (index, coffee) {
      $("#Elite").append(
        `<div class="product-title"><h3>${coffee.name}</h3></div>
            <div class="product-price"><h3>${coffee.cost}</h3></div>
            <div class="product-button">
            <button onclick="addToCart(event);" id="buy">Buy Now</button>
        </div>`
      );
    });
  });
  $.getJSON("data/data.json", function (coffee) {
    $.each(coffee.COFFEE_MAKER6, function (index, coffee) {
      $("#Mini").append(
        `<div class="product-title"><h3>${coffee.name}</h3></div>
            <div class="product-price"><h3>${coffee.cost}</h3></div>
            <div class="product-button">
            <button onclick="addToCart(event);" id="buy">Buy Now</button>
        </div>`
      );
    });
  });
  $.getJSON("data/data.json", function (coffee) {
    $.each(coffee.COFFEE_MAKER7, function (index, coffee) {
      $("#Mini_Two").append(
        `<div class="product-title"><h3>${coffee.name}</h3></div>
            <div class="product-price"><h3>${coffee.cost}</h3></div>
            <div class="product-button">
            <button onclick="addToCart(event);" id="buy">Buy Now</button>
        </div>`
      );
    });
  });
  $.getJSON("data/data.json", function (coffee) {
    $.each(coffee.COFFEE_MAKER8, function (index, coffee) {
      $("#Select").append(
        `<div class="product-title"><h3>${coffee.name}</h3></div>
            <div class="product-price"><h3>${coffee.cost}</h3></div>
            <div class="product-button">
            <button onclick="addToCart(event);" id="buy">Buy Now</button>
        </div>`
      );
    });
  });
  $.getJSON("data/data.json", function (coffee) {
    $.each(coffee.COFFEE_MAKER9, function (index, coffee) {
      $("#Slim").append(
        `<div class="product-title"><h3>${coffee.name}</h3></div>
            <div class="product-price"><h3>${coffee.cost}</h3></div>
            <div class="product-button">
            <button onclick="addToCart(event);" id="buy">Buy Now</button>
        </div>`
      );
    });
  });
  $.getJSON("data/data.json", function (coffee) {
    $.each(coffee.COFFEE_MAKER10, function (index, coffee) {
      $("#Supreme").append(
        `<div class="product-title"><h3>${coffee.name}</h3></div>
            <div class="product-price"><h3>${coffee.cost}</h3></div>
            <div class="product-button">
            <button onclick="addToCart(event);" id="buy">Buy Now</button>
        </div>`
      );
    });
  });
}

function logIn(e) {
  console.log("Login!");
  let password = $("#password").val();
  let email = $("#email").val();
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      console.log("signed in");
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
}
$(document).ready(function () {
  try {
    let app = firebase.app();
    initFirebase();
    initListen();
    loginSwitch();
    addToCart();
    openNav();
    closeNav();
  } catch {
    console.log(e);
    console.log(errorMessage);
  }
});
