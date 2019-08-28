var GanGB=new make_array("甲", "乙", "丙", "丁", "戊",
    "己", "庚", "辛", "壬", "癸");

var ZhiGB=new make_array("子", "丑", "寅", "卯", "辰", "巳",
    "午", "未", "申", "酉", "戌", "亥");

function make_array() {
      var tmparg=make_array.arguments;
      for(var i=0;i<tmparg.length;i++) {
        this[i]=tmparg[i];
      }
      this.length=tmparg.length;
}

class Lunar
{
  constructor(date) {
    this.date = date;
    this.getLunarDate(date);
  }

  getLunarDate(date) {
     var y = +Intl.DateTimeFormat("zh-TW-u-ca-chinese", {
         year: "numeric"
     }).format(date).match(/\d+/)[0],
         m = +Intl.DateTimeFormat("zh-TW-u-ca-chinese", {
             month: "numeric"
         }).format(date).match(/\d+/)[0],
         d = +Intl.DateTimeFormat("zh-TW-u-ca-chinese", {
             day: "numeric"
         }).format(date).match(/\d+/)[0];

     this.gan = (y - 1) % 10;
     this.zhi = (y - 1) % 12;
     this.m = m;
     this.d = d;
 }

 isLeapMonth() {
    var _date = new Date(this.date);
    var d = this.d;
    _date.setDate(-d);

    //console.log(+Intl.DateTimeFormat("zh-TW-u-ca-chinese",{month:"numeric"}).format(_date).match(/\d+/)[0],m);
    return +Intl.DateTimeFormat("zh-TW-u-ca-chinese", {
        month: "numeric"
    }).format(_date).match(/\d+/)[0] === this.m;
  }
}
