var theDate = new Date( document.lastModified );
with (theDate) {
  document.write( "<i>Last updated: "
                    +getDate()+'.'
                    +(getMonth()+1)+'.'
                    +getFullYear()
                    +"</i>" )
}
