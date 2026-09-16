 // Bài tập:
 const fullName = `Nguyễn Anh Huy`;
 const birthYear = 2003;
 const isStudent = true;

 const today = new Date().getFullYear();
 
 const tuoi = today - birthYear;
 
 console.log(`
    Full name: ${fullName}
    Birth year: ${birthYear}
    Tuổi: ${tuoi}`);
 
 