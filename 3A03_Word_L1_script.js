const _0x5f4a88=_0x3bc1;(function(_0x581a3a,_0x1bf6f7){const _0x3431d5=_0x3bc1,_0x1839ea=_0x581a3a();while(!![]){try{const _0x1a5df6=-parseInt(_0x3431d5(0x203))/0x1*(parseInt(_0x3431d5(0x1d5))/0x2)+parseInt(_0x3431d5(0x1ea))/0x3+parseInt(_0x3431d5(0x200))/0x4+-parseInt(_0x3431d5(0x1ee))/0x5*(parseInt(_0x3431d5(0x1d7))/0x6)+-parseInt(_0x3431d5(0x20e))/0x7+-parseInt(_0x3431d5(0x1f3))/0x8*(-parseInt(_0x3431d5(0x1e9))/0x9)+-parseInt(_0x3431d5(0x201))/0xa*(-parseInt(_0x3431d5(0x1e0))/0xb);if(_0x1a5df6===_0x1bf6f7)break;else _0x1839ea['push'](_0x1839ea['shift']());}catch(_0x5060f4){_0x1839ea['push'](_0x1839ea['shift']());}}}(_0x397b,0x5a6dc));const words=[_0x5f4a88(0x1fc),'월세',_0x5f4a88(0x218),_0x5f4a88(0x20b),'계약',_0x5f4a88(0x1e8),_0x5f4a88(0x1f8),_0x5f4a88(0x1d4),'시장이\x20가깝다',_0x5f4a88(0x1f6),_0x5f4a88(0x20a),'교통이\x20편리하다','이삿짐을\x20풀다','집들이를\x20하다',_0x5f4a88(0x208),'주변\x20환경이\x20조용하다'],englishTranslations=[_0x5f4a88(0x1fb),_0x5f4a88(0x1e3),_0x5f4a88(0x1da),_0x5f4a88(0x217),_0x5f4a88(0x1fa),_0x5f4a88(0x1d6),_0x5f4a88(0x1ed),_0x5f4a88(0x20d),_0x5f4a88(0x1db),'ачаа\x20зөөх','гэртээ\x20урих',_0x5f4a88(0x1f2),'ачаагаа\x20задлах',_0x5f4a88(0x1fe),_0x5f4a88(0x1d3),_0x5f4a88(0x1fd)];function _0x397b(){const _0x57b7bc=['гэрээ','үл\x20хөдлөх\x20хөрөнгө\x20зуучлалын\x20газар','부동산','эргэн\x20тойрны\x20орчин\x20нам\x20гүм','байрны\x20найр\x20хийх','join','454820CdWZlH','7299310EmSMJN','push','1BZKEpu','remove','disabled','grid','header','이삿짐을\x20나르다','classList','집으로\x20초대하다','보증금','alert','ачаагаа\x20цэгцлэх','4129048loMHqn','bottomRow','length','random','pop','undoButton','createElement','floor','addEventListener','барьцааны\x20мөнгө','이삿짐\x20센터','\x20:\x20','forEach','ачаа\x20зөөх','이삿짐을\x20정리하다','363890YIbbHY','нүүх\x20өдөр','6PxbBBc','<br>걸린\x20시간:\x20','getElementById','нүүлгэлтийн\x20компани','зах\x20ойрхон','end-message','2024-11-4','div','appendChild','11GEuJZi','getHours','empty','түрээсийн\x20төлбөр','hidden','\x20/\x20','slice','2024-11-3','이삿날','9jVUphn','605610tYzIVj','split','단어\x201\x20/\x20','ачаагаа\x20баглах','2073020WDYhvi','getMinutes','add','단어\x20','зам\x20тээвэр\x20тухтай','4090424phMNxj','getDate','cell','이삿짐을\x20옮기다','textContent','이삿짐을\x20싸다','date-time'];_0x397b=function(){return _0x57b7bc;};return _0x397b();}let currentWordIndex=0x0,currentWord=words[currentWordIndex]['split'](''),clickedLetters=[],previousClickedCells=[],startTime=new Date();function shuffleArray(_0x523b4){const _0x13c042=_0x5f4a88;for(let _0x28f5a7=_0x523b4[_0x13c042(0x210)]-0x1;_0x28f5a7>0x0;_0x28f5a7--){let _0x57e565=Math[_0x13c042(0x215)](Math[_0x13c042(0x211)]()*(_0x28f5a7+0x1));[_0x523b4[_0x28f5a7],_0x523b4[_0x57e565]]=[_0x523b4[_0x57e565],_0x523b4[_0x28f5a7]];}return _0x523b4;}function createGrid(){const _0x6828d5=_0x5f4a88,_0x4ee929=document[_0x6828d5(0x1d9)](_0x6828d5(0x206));_0x4ee929['innerHTML']='';let _0x44c8dc=[];_0x44c8dc=words[_0x6828d5(0x1e6)](currentWordIndex,currentWordIndex+0x1)[_0x6828d5(0x1ff)]('')[_0x6828d5(0x1eb)](''),_0x44c8dc=shuffleArray(_0x44c8dc);for(let _0x2916fc=0x0;_0x2916fc<0x31;_0x2916fc++){const _0x5ccfb=document[_0x6828d5(0x214)](_0x6828d5(0x1de));_0x5ccfb['classList'][_0x6828d5(0x1f0)](_0x6828d5(0x1f5)),_0x44c8dc[_0x2916fc]?(_0x5ccfb[_0x6828d5(0x1f7)]=_0x44c8dc[_0x2916fc],_0x5ccfb[_0x6828d5(0x216)]('click',()=>handleCellClick(_0x5ccfb))):(_0x5ccfb[_0x6828d5(0x1f7)]='',_0x5ccfb[_0x6828d5(0x209)][_0x6828d5(0x1f0)](_0x6828d5(0x1e2))),_0x4ee929['appendChild'](_0x5ccfb);}}function handleCellClick(_0x1a2b96){const _0x38d156=_0x5f4a88;if(clickedLetters[_0x38d156(0x210)]<currentWord[_0x38d156(0x210)]&&_0x1a2b96['textContent']){clickedLetters[_0x38d156(0x202)](_0x1a2b96[_0x38d156(0x1f7)]),previousClickedCells[_0x38d156(0x202)](_0x1a2b96),_0x1a2b96[_0x38d156(0x1f7)]='',_0x1a2b96[_0x38d156(0x209)]['add'](_0x38d156(0x1e2)),updateBottomRow();const _0x12a3a0=document[_0x38d156(0x1d9)](_0x38d156(0x213));clickedLetters[_0x38d156(0x210)]>0x0&&(_0x12a3a0[_0x38d156(0x209)]['remove'](_0x38d156(0x205)),_0x12a3a0[_0x38d156(0x205)]=![]),clickedLetters[_0x38d156(0x210)]===currentWord['length']&&checkCompletion();}}function updateBottomRow(){const _0x10f9fd=_0x5f4a88,_0x15c32a=document[_0x10f9fd(0x1d9)](_0x10f9fd(0x20f));_0x15c32a['innerHTML']='',clickedLetters[_0x10f9fd(0x1d2)](_0x5bc068=>{const _0x243ccd=_0x10f9fd,_0x195272=document['createElement'](_0x243ccd(0x1de));_0x195272[_0x243ccd(0x209)][_0x243ccd(0x1f0)]('cell'),_0x195272[_0x243ccd(0x1f7)]=_0x5bc068,_0x15c32a[_0x243ccd(0x1df)](_0x195272);});}function displayDateTime(){const _0x1d354c=_0x5f4a88,_0x239413=document['getElementById'](_0x1d354c(0x1f9)),_0x50217d=new Date(),_0x268be6=_0x50217d['getFullYear']()+'년\x20'+(_0x50217d['getMonth']()+0x1)+'월\x20'+_0x50217d[_0x1d354c(0x1f4)]()+'일\x20'+_0x50217d[_0x1d354c(0x1e1)]()+'시\x20'+_0x50217d[_0x1d354c(0x1ef)]()+'분',_0x12c83a=Math[_0x1d354c(0x215)]((_0x50217d-startTime)/0x3e8),_0x7511f7=Math[_0x1d354c(0x215)](_0x12c83a/0x3c),_0x5b64ab=_0x12c83a%0x3c;_0x239413['innerHTML']=_0x268be6+_0x1d354c(0x1d8)+_0x7511f7+'분\x20'+_0x5b64ab+'초';}function checkCompletion(){const _0x1b0afb=_0x5f4a88,_0x5df545=document[_0x1b0afb(0x1d9)](_0x1b0afb(0x20c));if(clickedLetters[_0x1b0afb(0x1ff)]('')===currentWord[_0x1b0afb(0x1ff)]('')){_0x5df545[_0x1b0afb(0x209)][_0x1b0afb(0x1f0)](_0x1b0afb(0x1e4));if(currentWordIndex<words[_0x1b0afb(0x210)]-0x1){currentWordIndex++,currentWord=words[currentWordIndex]['split'](''),clickedLetters=[],previousClickedCells=[];let _0x43f72c=currentWord[_0x1b0afb(0x210)];document[_0x1b0afb(0x1d9)](_0x1b0afb(0x207))[_0x1b0afb(0x1f7)]=_0x1b0afb(0x1f1)+(currentWordIndex+0x1)+_0x1b0afb(0x1e5)+words[_0x1b0afb(0x210)]+_0x1b0afb(0x219)+englishTranslations[currentWordIndex]+'\x20('+_0x43f72c+')',createGrid(),updateBottomRow();const _0x1d5112=document[_0x1b0afb(0x1d9)](_0x1b0afb(0x213));_0x1d5112['classList'][_0x1b0afb(0x1f0)](_0x1b0afb(0x205)),_0x1d5112[_0x1b0afb(0x205)]=!![];}else document[_0x1b0afb(0x1d9)](_0x1b0afb(0x206))['classList'][_0x1b0afb(0x1f0)](_0x1b0afb(0x1e4)),document[_0x1b0afb(0x1d9)]('bottomRow')[_0x1b0afb(0x209)][_0x1b0afb(0x1f0)](_0x1b0afb(0x1e4)),document[_0x1b0afb(0x1d9)](_0x1b0afb(0x207))['classList'][_0x1b0afb(0x1f0)](_0x1b0afb(0x1e4)),document[_0x1b0afb(0x1d9)](_0x1b0afb(0x1dc))[_0x1b0afb(0x209)][_0x1b0afb(0x204)](_0x1b0afb(0x1e4)),displayDateTime();}else _0x5df545['classList'][_0x1b0afb(0x204)](_0x1b0afb(0x1e4)),clickedLetters=[],previousClickedCells=[],updateBottomRow(),createGrid();}document[_0x5f4a88(0x1d9)]('undoButton')[_0x5f4a88(0x216)]('click',()=>{const _0x4f3bd3=_0x5f4a88;if(clickedLetters['length']>0x0){const _0x5329f6=clickedLetters[_0x4f3bd3(0x212)](),_0xe1e0a9=previousClickedCells[_0x4f3bd3(0x212)]();_0xe1e0a9&&(_0xe1e0a9[_0x4f3bd3(0x1f7)]=_0x5329f6,_0xe1e0a9[_0x4f3bd3(0x209)][_0x4f3bd3(0x204)](_0x4f3bd3(0x1e2)));updateBottomRow();if(clickedLetters[_0x4f3bd3(0x210)]===0x0){const _0x73d45e=document[_0x4f3bd3(0x1d9)]('undoButton');_0x73d45e[_0x4f3bd3(0x209)]['add']('disabled'),_0x73d45e[_0x4f3bd3(0x205)]=!![];}}});let d=currentWord[_0x5f4a88(0x210)];document[_0x5f4a88(0x1d9)](_0x5f4a88(0x207))[_0x5f4a88(0x1f7)]=_0x5f4a88(0x1ec)+words[_0x5f4a88(0x210)]+_0x5f4a88(0x219)+englishTranslations[0x0]+'\x20('+d+')',createGrid();function _0x3bc1(_0x22a893,_0x4a05e1){const _0x397b65=_0x397b();return _0x3bc1=function(_0x3bc158,_0x181185){_0x3bc158=_0x3bc158-0x1d2;let _0x30f529=_0x397b65[_0x3bc158];return _0x30f529;},_0x3bc1(_0x22a893,_0x4a05e1);}const currentDate=new Date(),startDate=new Date(_0x5f4a88(0x1e7)),endDate=new Date(_0x5f4a88(0x1dd));createGrid();