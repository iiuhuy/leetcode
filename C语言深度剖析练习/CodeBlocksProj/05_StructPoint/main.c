#include <stdio.h>
//#include <stdlib.h>

//---------------------------------------------------------------------------------------------------------------------//

// 结构体指针作为函数参数传递:
/*
typedef struct Coordinate
{
    int x;
    int y;
} Coordinate;

void initializerStruct(Coordinate *point);  // 函数原型

int main(int argc, char *argv[])
{
    Coordinate myPoint;

    //initializeCoordinate(&myPoint);    // 函数的参数是 myPoint 的地址
    Coordinate *myPointPointer = &myPoint;

    myPoint.x = 10;     // 用结构体的方式修改 myPoint 中的 x 的值
    myPointPointer->y = 15; // 用结构体指针的方式修改 myPoint 中的 y 值

    printf("x value is %d\n", myPoint.x);
    printf("y value is %d\n", myPoint.y);
    return 0;
}

void initializeCoordinate(Coordinate *point)
{
    // 放置结构体初始化的代码
    //*point.x = 0;
    //*point.y = 0;    ---- 这样子是编译不过的, 为什么呢？

    //(*point).x = 0;
    //(*point).y = 0;   // 所以需要加括号则可以通过, 哪儿这样是不是很麻烦呢？ 这样就使用了新的符号  '->'

    point->x = 0;
    point->y = 0;   // '->' 这个符号只能用在指针上
}
*/

//---------------------------------------------------------------------------------------------------------------------//

// union 和 struct 储存变量的区别
/*
//typedef union ProgrammerLeague
//{
//    char character;     // size is 1
//    int memberNumber;   // size is 4
//    double rate;        // size is 8
//}ProgrammerLeague;
// 分别测试 union 和 struct 的大小


typedef struct ProgrammerLeague
{
    char character;     // size is 1
    int memberNumber;   // size is 4
    double rate;        // size is 8
}ProgrammerLeague;

int main(int argc, char *argv[])
{
    ProgrammerLeague programmerLeague;

    printf("This union size is %1u\n", sizeof(programmerLeague));

    return 0;
}
*/

//---------------------------------------------------------------------------------------------------------------------//

/// enum

typedef enum Shape Shape;

enum Shape
{
    THIN,
    MEDIUM,
    FAT
};

int main(int argc, char *argv[])
{
    Shape shape = THIN;
    printf("THIN = %d\n", shape);

    shape = MEDIUM;
    printf("MEDIUM = %d\n", shape);

    shape = FAT;
    printf("FAT = %d\n", shape);

    return 0;
}       // 这样可以看出 enum 每次取其中一个值, 和 union 很类似, 但是 enum 的成员都是常量而不是变量;


