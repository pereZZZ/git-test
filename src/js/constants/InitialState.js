export default { 
    love:JSON.parse(localStorage.getItem('love')) !== null ? JSON.parse(localStorage.getItem('love')) : false || [],
    allrepo:[]
};