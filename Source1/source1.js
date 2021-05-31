const constantFromTheSourceOneFile = "THIS IS FROM source1.js FILE";

function this_function_name_should_be_reserved() {
   for (let i=0; i<5; i++) {
      console.warn(i);  
   }
}

module.exports.constantFromTheSourceOneFile = constantFromTheSourceOneFile;
module.exports.this_function_name_should_be_reserved = this_function_name_should_be_reserved;