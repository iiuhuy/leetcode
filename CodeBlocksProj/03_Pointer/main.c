#include <stdio.h>
//#include <stdlib.h>

/* one_test
void transformMinutes(int hours, int minutes);

int main(int argc, char *argv[])
{
    int hours = 0, minutes = 90;

    transformMinutes(hours, minutes);
    printf("%d 小时 ： %d 分钟\n", &hours, &minutes);
    return 0;
}

void transformMinutes(int hours, int minutes)
{
    hours = minutes / 60;   // 90 / 60 = 1
    minutes = minutes % 60; // 90 % 60 = 30
}
*/

//-------------------------------------------------------------------------------------------------------------------------//
// 指针传递给函数方式 1
/*
void triplePointer(int *pointerOnNumber);
int main(int argc, char *argv[])
{
    int number = 5;

    triplePointer(&number); // 将 number 变量的地址传递给 triplePointer 函数
    printf("%d\n", number);
    return 0;
}

void triplePointer(int *pointerOnNumber)
{
    *pointerOnNumber *= 3;  // 将 pointerOnNumber 的值乘以 3
}
*/
//-------------------------------------------------------------------------------------------------------------------------//
// 指针传递给函数方式 2
/*
void triplePointer(int *pointerOnNumber);

int main(int argc, char *argv[])
{
    int number = 5;

    int *pointer = &number; // pointer 里面储存的是 number 的值; (*pointer 表示值)
    triplePointer(pointer); // 将 pointer (值是 number 的地址)传递给函数
    printf("%d\n", *pointer);   // 用 *pointer 来显示 number 的值

    return 0;
}

void triplePointer(int *pointerOnNumber)
{
    *pointerOnNumber *= 3;  // 将 pointerOnNumber 的值乘以 3
}
*/
//-------------------------------------------------------------------------------------------------------------------------//
// 完成 ne_test 的棘手问题: 使输出结果为: x 小时, x 分钟!
void transformMinutes(int *hours, int *minutes);

int main(int argc, char *argv[])
{
    int hours = 0, minutes = 100;

    transformMinutes(&hours, &minutes);
    printf("%d 小时 ： %d 分钟\n", hours, minutes);
    return 0;
}

void transformMinutes(int *hours, int *minutes)
{
    // 记得, 不要忘了取值符号 (*) , 这样才可以改变变量的值, 而不是它们的地址.
    *hours = *minutes / 60;   // 90 / 60 = 1
    *minutes = *minutes % 60; // 90 % 60 = 30
}


