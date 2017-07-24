#include <stdio.h>
#include <stdlib.h>

//---------------------------------------------------------------------------------------------------------------------//

/*
int main()
{
    int array[4], i = 0;

    // for 循环初始化数组
    for(i=0; i<4; i++)
    {
        array[i] = 0;
    }

    for(i=0; i<4; i++)
    {
        printf("%d\n", array[i]);
    }
    return 0;
    //---------------------------------------------------------------------------------------------------------------------//

    // 直接初始化数组
    int array[4] = {0,0,0,0}, i = 0;
    // int array[4] = {0};   // 更简便的把数组初始化为 0 , 因为即便只写了一个成员的值, 后面的值也会自动初始化为 0
    for(i=0; i<4; i++)
    {
        printf("%d\n", array[i]);
    }
    return 0;

    //---------------------------------------------------------------------------------------------------------------------//
}
*/

//---------------------------------------------------------------------------------------------------------------------//

/*
// 把数组传递给函数
void display(int *array, int arraySize);
int main(int argc, char *argv[])
{
    int array[4] = {10, 15, 3};

    // 显示数值的内容
    display(array, 4);

    return 0;
}

void display(int *array, int arraySize)
{
    int i;

    for(i=0; i<arraySize; i++)
    {
        printf("%d\n", array[i]);
    }
}
*/

//---------------------------------------------------------------------------------------------------------------------//

/*
// 求数组的平均值
double arrayAverage(int array[], int arraySize);
int main(int argc, char *argv[])
{
    int array[5] = {66, 77, 79, 89, 91};

    printf("该数组的平均值为: %f\n", arrayAverage(array, 5));
    return 0;
}

double arrayAverage(int array[], int arraySize)
{
    int i;
    double  sum = 0;
    for(i=0; i<arraySize; i++)
    {
        sum += array[i];
    }
    return sum/arraySize;
}
*/

//---------------------------------------------------------------------------------------------------------------------//

/*
// 一个函数, 三个参数, 第一个数组, 第二个数组大小, 第三个最大值。如果这个数组里有成员的值大于最大值, 则将此成员的值变为 0
void arrayMax(int array[], int arraySize, int valueMax);

int main(int argc, char *argv[])
{
    int array[5] = {55, 65, 75, 85, 95};
    int max = 50;
    arrayMax(array, 5, max);
    return 0;
}

void arrayMax(int array[], int arraySize, int valueMax)
{
    int i;
    for(i=0; i<arraySize; i++)
    {
        if(array[i] > valueMax)
        array[i] = 0;
        printf("array[%d] = %d\n", i, array[i]);
    }
}
*/

//---------------------------------------------------------------------------------------------------------------------//

// 数组的拷贝: 函数有三个参数, 第一和第二个参数是数组名, 第三个参数是数组大小。将第一个参数 (数组) 的内容拷贝到第二个参数 (数组) 里.
void copyArray(int originalArray[],int copyArray[],int arraySize);

int main(int argc, char *argv[])
{
    int arrayOne[3] = {11, 22, 33};
    int arrayTwo[3] = {0};
    copyArray(arrayOne, arrayTwo, 3);
    return 0;
}

void copyArray(int originalArray[],int copyArray[],int arraySize)
{
    int i;
    for(i=0; i<arraySize; i++)
    {
        copyArray[i] = originalArray[i];
    }
    printf("拷贝的数组为: Array{%d, %d, %d}\n", copyArray[0], copyArray[1],copyArray[2]);
}
