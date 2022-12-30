window.addEventListener("load", solve);

function solve() {

  let firstName = document.getElementById("first-name")
  let lasName = document.getElementById("last-name");
  let age = document.getElementById("age");
  let storyTitle = document.getElementById("story-title");
  let storyArea = document.getElementById("story");
  let genre = document.getElementById("genre");
  let btn = document.getElementById("form-btn");
  btn.addEventListener("click", addInfo);
  let appendElToUl = document.getElementById("preview-list");



  function addInfo(e) {

    let firstNameValue = firstName.value;
    let lasNameValue = lasName.value;
    let ageValue = age.value;
    ageValue = Number(ageValue);
    let storyTitleValue = storyTitle.value;
    let storyAreaValue = storyArea.value;
    let genreValue = genre.value;


    if (firstNameValue === "" || lasNameValue === "" || ageValue === "" || storyAreaValue === "" || storyTitleValue === "") {
      return;
    }

    let li = document.createElement("li");
    li.classList.add("story-info");
    let article = document.createElement("article");
    let h4 = document.createElement("h4")
    h4.textContent = `Name: ${firstNameValue + " " + lasNameValue}`;
    let p1 = document.createElement("p");
    p1.textContent = `Age: ${ageValue}`
    let p2 = document.createElement("p");
    p2.textContent = `Tittle: ${storyTitleValue}`
    let p3 = document.createElement("p");
    p3.textContent = `Genre: ${genreValue}`
    let p4 = document.createElement("p");
    p4.textContent = storyAreaValue;

    let saveBtn = document.createElement("button");
    saveBtn.classList.add("save-btn");
    saveBtn.textContent = "Save Story";
    let editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit Story";
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete Story";

    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
    article.appendChild(p4);

    li.appendChild(article)
    li.appendChild(saveBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    appendElToUl.appendChild(li)

    clearForm();

    btn.disabled = true;
    debugger





  }

  function clearForm() {
    firstName.value = "";
    lasName.value = "";
    age.value = "";
    storyArea.value = "";
    storyTitle.value = "";
   
  }


}


