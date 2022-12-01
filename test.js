function request() {
  var i = 0, j = 0;
  var start = +new Date();
  for (i = 0; i < 10000000000; i++)
  {
    j = i;
  }
  var end = +new Date()
  
  console.log("Timegap: ", end - start)
}

window.GcHtml5 = {
  createClient: function () {
    return {
      request: request
    }
  }
}
