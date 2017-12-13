export default { 
    msg:JSON.parse(localStorage.getItem('msg')) !== null ? JSON.parse(localStorage.getItem('msg')) : false || [],
};