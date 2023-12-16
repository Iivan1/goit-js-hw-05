const getTotalBalanceByGender = (users, gender) => {
    return users.filter(user => return user.gender === gender);
}