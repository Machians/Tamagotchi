const model = {
  loggedin: "", //"yes"/"no"
  needsbathing: "", //yes/no
  growstage: "", //egg,child,grown,special
  dead: "", //yes/no
  album: ["", "", "", ""], //should contain growth history in images.
  animals: [],
  menuopen: "no", //"yes"/"no"
  foodmenuopen: "no", //"yes"/"no"
  userlist: [],
  tamalist: [],
  users: [],
  useranimals: [],
};


async function getUsers() {
  try {
    let dbResult = await get('users.php', {});
    model.users.push(...dbResult);
    getAnimals();
    console.log(dbResult);
  } catch (error) {
    console.error(error);
  }
}

async function getAnimals() {
  try {
    let dbResult = await get('animals.php', {});
    model.animals.push(...dbResult);
    getUserAnimals();
    console.log(dbResult);
  } catch (error) {
    console.error(error);
  }
}

async function getUserAnimals() {
  try {
    let dbResult = await get('useranimals.php', {});
    model.useranimals.push(...dbResult);
    updateView();
    console.log(dbResult);
    console.log(model);
  } catch (error) {
    console.error(error);
  }
}

function get(url, params) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: url,
      type: 'GET',
      data: params,
      success: function(data) {
        resolve(JSON.parse(data));
      },
      error: function(error) {
        reject(error)
      },
    })
  })
}



