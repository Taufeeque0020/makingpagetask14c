function showNewUserOnScreen(user) {
    const parentNode = document.getElementById('users');
    const childHTML=`<li id= ${user._id}> ${user.name} -${user.email}
                     <button onclick= deleteUser('${user._id}')>Delete User</button>
                     <button onclick= editUserDetails('${user.email}','${user.name}','${user.mobile}')>Edit</button>
                     <button onclick= editUserDetails('${user._id}','${user.email}','${user.name}','${user.mobile}')>Edit</button>
                     </li>`
    parentNode.innerHTML=parentNode.innerHTML + childHTML;                 
}
function removeUserFromScreen(Id) {

  //Edit user
  function editUserDetails(id,email,name,mobile) {
    document.getElementById('name').value = name;
    document.getElementById('email').value = email;
    document.getElementById('mobile').value = mobile;

    deleteUser(email)
   deleteUser(id)

  }
}