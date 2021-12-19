
var express = require('express');
var app = express();


// /api/:date?
app.get('/api/:date?',(req,res) => { 
  let date = req.params.date;  
  if(date) { 
    //suru theke sesh porjonto traverse kore dekhte hobe je etau number bade onno character ache kina . 
    //jodi number bade onno character thake taholei amra dhore nibo seita number na 
    let allNumber = true; 
    const stringDate = date.toString(); 
    for(c of stringDate) { 
      if(!(c>='0' && c<='9')) { 
        allNumber = false; 
        break; 
      } 
    }
    console.log(date,'contains character 🎈',allNumber); 
    if(!allNumber) { 
      //string
      let result = new Date(date); 
      console.log(allNumber,result); 
      if(result == 'Invalid Date') { 
        res.json({
          error: 'Invalid Date'
        })
      } else { 
          res.json({
            unix: result.getTime(), 
            utc: result.toUTCString()
          })
      }
    } else { 
      //for number 
      let result = new Date(parseInt(date)); 
      
      console.log(allNumber,result); 
      if(result == 'Invalid Date') { 
        res.json({
          error: 'Invalid Date'
        })
      } else { 
          res.json({
            unix: result.getTime(), 
            utc: result.toUTCString()
          })
      }
    }


    //previous solution 
    // //convert the date to number first . 
    // const parsedDate = parseInt(date); 
    // //NaN 
    // if(isNaN(parsedDate)) 
    // { 
    //   let result = new Date(date);  
    //   console.log(new Date(date),new Date('2011-04-11T10:20:30Z'))
    //   console.log(date,result); 
    //   if(result=='Invalid Date') { 
    //     res.json({
    //       error: 'Invalid Date'
    //     })
    //   } 
    //   else { 
    //     res.json({
    //       unix: result.getTime(), 
    //       utc: result.toUTCString()
    //     })
    //   }
    // }

    // //Number  
    // else { 
    //   console.log('maybe here'); 
    //   let result = new Date(parsedDate);  
    //   if(result=='Invalid Date') { 
    //     res.json({
    //       error: 'Invalid Date'
    //     })
    //   } 
    //   else { 
    //     res.json({
    //       unix: result.getTime(), 
    //       utc: result.toUTCString()
    //     })
    //   }
    // }
    

  } else { 
    res.json( { 
      unix: Date.now(), 
      utc: new Date().toUTCString()
    })
  }
})




// listen for requests :)
var listener = app.listen(3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
