#배당금을 통했을때 저축과 얼마나 차이가 나는지 알아봅시다. 
initial_price = 85000

stock_number = 100  # 예시로 100주 설정
bedang_price = 750

# 함수 정의: 값을 계산해서 '반환'하도록 수정
def bedang_machine(count, price): #입력
    result = count * price
    return result # 출력

# 함수 사용(호출): 계산된 값을 변수에 저장
total_bedang = bedang_machine(stock_number, bedang_price)

print(f"총 배당금은 {total_bedang}원입니다.")


#이제 스톡 넘버를 조정해야함


def invest_month(month):
    s_price = 85000
    s_number = 0
    b_price = 750
    total_dividend = 0

    for i in range(month):
        total_dividend += bedang_machine(s_number, b_price)
        s_number += 1

    total_money = s_number*s_price + total_dividend

    return total_money
        
#m = int(input("몇 달간 매달 투자하시겠습니까?: "))
#print(f"{m}달간 꾸준히 투자하면 총{invest_month(m)}원이 됩니당")

#일단 이렇게 매일 모았을 때 일정 일 수 후에 얼마나 모이나 해봅시다. 
#부모님 돈도 있지만 용돈이라 생각하고 미래에 투자합시다. 부모님과 더불어 가족을 책임진다.



def invest_daily(day):
    SCHD = 0
    JEPI = 0
    JEPQ = 0
    QQQM = 0
    TESLA = 0
    COKE = 0
    for i in range(day):
        SCHD += 1500
        JEPI += 1500
        JEPQ += 3500
        QQQM += 2000
        TESLA += 2000
        COKE += 3000
    print(f"{day}일간 꾸준히 투자하면 SCHD: {SCHD}원, {int(SCHD/45000)}주, 배당:{SCHD/45000*380}원")
    print(f"{day}일간 꾸준히 투자하면 JEPI: {JEPI}원, {JEPI/85000}주, 배당:{JEPI/85000*550}원")
    print(f"{day}일간 꾸준히 투자하면 JEPQ: {JEPQ}원, {JEPQ/85000} 주, 배당:{JEPQ/85000*750}원")
    print(f"{day}일간 꾸준히 투자하면 QQQM: {QQQM}원, {QQQM/370000}주")
    print(f"{day}일간 꾸준히 투자하면 TESLA: {TESLA}원, {TESLA/550000}주")
    print(f"{day}일간 꾸준히 투자하면 COKE: {COKE}원, {COKE/120000}주, 배당:{COKE/85000*780}원")
    print("총 투자", SCHD + JEPQ + JEPI + TESLA + QQQM + COKE, "원")
    return 0

m = int(input("몇일동안 매일 투자하시겠습니까?: "))
invest_daily(m)

# 5년 후는 월 배당 15만원정도. 
# 10년 후(나32살) 월 100만원배당은 가능할지도? 잘하면, 현재 보니 월 40만원 정도는 미니멈으로 보인다. 



