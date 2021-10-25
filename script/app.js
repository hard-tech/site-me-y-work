document.querySelector("#navig").innerHTML = `
<nav class="navbar fixed-top navbar-expand-lg navbar-dark">
<div class="container-fluid">
  <img src="./img/logo_team/logo_small_icon_only_inverted.png" class="rounded float-start img-fluid mx-2" width="50px" height="50px" alt="icon indisponible">
  <a class="navbar-brand fs-2 px-3" href="#"><b>New-tech</b></a>
  <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="navbar-collapse collapse" id="navbarColor01" style="margin-top: 10px;">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active me-3 fs-5" aria-current="page" style="margin-top: -3px;" href="index.html">Home</a>
      </li>

      <div class="btn-group" role="group">
        <button id="btnGroupDrop1" type="button" class="btn text-start mx-1 down-btn text-white nav-item dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style="margin-left: -10px; padding-left: 10px;">
          Projet
        </button> 
        <ul class="dropdown-menu" style="background: transparent;" aria-labelledby="btnGroupDrop1">
          <li><a class="dropdown-item nav-item hover-black rounded-3 text-white" href="Site-web.html">Site web</a></li>
          <li><a class="dropdown-item nav-item hover-black rounded-3 text-white" href="programme.html">Programme  🔒</a></li>
        </ul>
      </div>
      
      <div class="btn-group" role="group">
        <button id="btnGroupDrop1" type="button" class="btn text-start mx-1 down-btn text-white nav-item dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style="margin-left: -10px; padding-left: 10px;">
          Mon compte
        </button> 
        <ul class="dropdown-menu" style="background: transparent;" aria-labelledby="btnGroupDrop1">
          <li><a class="dropdown-item nav-item hover-black rounded-3 text-white" href="login.html">Connexion</a></li>
          <li><a class="dropdown-item nav-item hover-black rounded-3 text-white" href="sign-in.html">S'identifier</a></li>
        </ul>
      </div>
      
      <div class="btn-group" role="group">
        <button id="btnGroupDrop1" type="button" class="btn text-start mx-1 down-btn text-white nav-item dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style="margin-left: -10px; padding-left: 10px;">
          Info
        </button> 
        <ul class="dropdown-menu" style="background: transparent;" aria-labelledby="btnGroupDrop1">
          <li><a class="dropdown-item nav-item hover-black rounded-3 text-white" href="recrutement.html">Recrutement</a></li>
          <li><a class="dropdown-item nav-item hover-black rounded-3 text-white" href="contact.html">Contact</a></li>
        </ul>
      </div>

 
        <a class="me-2 mx-1text-white" style="margin-top: 9px;" href="about.html">&Agrave; propos</a>
    </ul>
    <!-- ### Teste ### -->
    <form class="d-flex d-flex-liste" id="auto-suggest" action="#" method="post">
      <input  id="searchInput" id="autocomplete" placeholder="Recherche" aria-label="Search" type="text" class="search form-control me-2 input" name="search" onfocus="if(this.value=='Rechercher...')this.value=''" onblur="if(this.value=='')this.value='Rechercher...' " autocomplete="off"/>
      <button class="btn btn-outline-light mx-2" style="width: 50px;" type="submit" onclick="Search()">&#x1F50D;</button>
    </form>
    <!-- ### /Teste ### -->
  </div>
</div>
</nav>
<br><br><br>
`;

document.querySelector(".footer").innerHTML = `
<div class=" text-center py-2">© 2021 Copyright by new-tech :
site v1.9.2
</div>  
`;

function Search() {

    
  const searchInput = document.getElementById('searchInput').value;
  
      if (searchInput == "(le nom de la page)"){window.open("(la page)")}
      alert(searchInput)
      if (searchInput == "1"){window.open("https://www.systemrequirementslab.com/cyri/requirements/minecraft/11356")}
}  

window.onload = function(){
var motsClefs = [
'1',
'2'
];

var form = document.getElementById("auto-suggest");
var input = form.search;

var list = document.createElement("ul");
list.className = "suggestions";
list.className = "d-flex-liste";
list.style.display = "none";

form.appendChild(list);

input.onkeyup = function(){
var txt = this.value;
if(!txt){
list.style.display = "none";
  return;
}

var suggestions = 0;
var frag = document.createDocumentFragment();

for(var i = 0, c = motsClefs.length; i < c; i++){
if(new RegExp("^"+txt,"i").test(motsClefs[i])){
  var word = document.createElement("li");
  frag.appendChild(word);
  word.innerHTML = motsClefs[i].replace(new RegExp("^("+txt+")","i"),"<strong>$1</strong>");
  word.mot = motsClefs[i];
  word.onmousedown = function(){					
    input.focus();
    input.value = this.mot;
    list.style.display = "none";
    return false;
  };				
  suggestions++;
}
}

if(suggestions){
list.innerHTML = "";
list.appendChild(frag);
list.style.display = "flex";
}
else {
list.style.display = "none";			
}
};

input.onblur = function(){
list.style.display = "none";	
};
};