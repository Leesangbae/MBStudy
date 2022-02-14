let start = new Date(); // 측정 시작

function sayHi() {     console.log( "Hello" );
}

let func = sayHi;    // (2) 함수 복사

func(); // Hello     // (3) 복사한 함수를 실행(정상적으로 실행됩니다)!
sayHi(); // Hello    //     본래 함수도 정상적으로 실행됩니다

let sum = (a, b) => {  // 중괄호는 본문 여러 줄로 구성되어 있음을 알려줍니다.
    let result = a + b;
    return result; // 중괄호를 사용했다면, return 지시자로 결괏값을 반환해주어야 합니다.
  };
  
  console.log( sum(1, 2) ); // 3
  
let now = new Date();
console.log( now ); // 현재 날짜 및 시간이 출력됨

let date = new Date();

// 현지 시간 기준 시
console.log( date.getHours() );

// 표준시간대(UTC+0, 일광 절약 시간제를 적용하지 않은 런던 시간) 기준 시
console.log( date.getUTCHours() );

let end = new Date(); // 측정 종료

console.log( `반복문을 모두 도는데 ${end - start} 밀리초가 걸렸습니다.` );

function pow(x, n) {
    if (n == 1) {
      return x;
    } else {
      return x * pow(x, n - 1);
    }
  }
  
  console.log( pow(2, 3) ); // 8