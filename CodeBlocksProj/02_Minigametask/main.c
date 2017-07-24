#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(int argc, char** argv)
{
    int InputNumber, GuessNumber;
    const int MAX = 100, MIN = 1;
    // 生成随机数: 产生在 1~100 之间的一个随机数, 赋值给 InputNumber
    srand(time(NULL));
    InputNumber = (rand() % (MAX - MIN + 1)) + MIN;
    // 进行猜数字
    do{
        printf("猜猜这个数是多少？!\n");
        scanf("%d", &GuessNumber);
        if(InputNumber > GuessNumber)
            printf("猜小了, 再猜猜！\n");
        else if(InputNumber < GuessNumber)
            printf("猜大了, 再猜猜！\n");
        else
            printf("恭喜你猜对了！！！\n");
    }while(GuessNumber != InputNumber);
    return 0;
}
