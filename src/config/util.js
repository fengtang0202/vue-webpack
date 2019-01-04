import AES from 'crypto-js/aes'
import Utf8 from 'crypto-js/enc-utf8'
import ECB from 'crypto-js/mode-ecb'
import padding from 'crypto-js/pad-pkcs7'
export default { //加密
    // encrypt(word, keyStr = 'HXTK20190102_1.0') {
    //     var key = CryptoJS.enc.Utf8.parse(keyStr); //Latin1 w8m31+Yy/Nw6thPsMpO5fg==
    //     var srcs = CryptoJS.enc.Utf8.parse(word);
    //     var encrypted = CryptoJS.AES.encrypt(srcs, key, {
    //         mode: CryptoJS.mode.ECB,
    //         padding: CryptoJS.pad.Pkcs7
    //     });
    //     return encrypted.toString();
    // },
    // parseHexStr2Byte(hexStr) {
    //     if (hexStr.length < 1) {
    //         return null
    //     }
    //     let result = []
    //     for (let i = 0; i < hexStr.length/2; i++) {
    //         var high = parseInt(hexStr.substring(i * 2, i * 2 + 1),16)
    //         var low = parseInt(hexStr.substring(i * 2 + 1, i * 2 + 2),16) 
    //         result[i] = (high * 16 + low)
    //     }
    //     return result
    // },
    // byteToString(arr) {
    //      if (typeof arr === 'string') {
    //          return arr;
    //      }
    //      var str = '',
    //          _arr = arr;
    //      for (var i = 0; i < _arr.length; i++) {
    //          var one = _arr[i].toString(2),
    //              v = one.match(/^1+?(?=0)/);
    //          if (v && one.length == 8) {
    //              var bytesLength = v[0].length;
    //              var store = _arr[i].toString(2).slice(7 - bytesLength);
    //              for (var st = 1; st < bytesLength; st++) {
    //                  store += _arr[st + i].toString(2).slice(2);
    //              }
    //              str += String.fromCharCode(parseInt(store, 2));
    //              i += bytesLength - 1;
    //          } else {
    //              str += String.fromCharCode(_arr[i]);
    //          }
    //      }
    //      return str;
    //  },
      decrypt(word, keyStr = 'HXTK20190102_1.0') {
          var key =Utf8.parse(keyStr); //Latin1 w8m31+Yy/Nw6thPsMpO5fg==
          var decrypt = AES.decrypt(word, key, {
              mode:ECB,
              padding:padding
          });
          return Utf8.stringify(decrypt).toString();
      }
}