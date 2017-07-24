#include <stdio.h>
#include <stdlib.h>

int b[100];

void fun(int b[100])
{
    sizeof(b);  // sizeof(b) 的值是多少
}

int main()
{
    int *p = NULL;
    int a[100];
    fun(b[100]);
    int i = -20;
    unsigned j = 10;

    printf("%d\n", sizeof(p));
    printf("%d\n  ---- \n", sizeof(*p));
    printf("%d\n", sizeof(a));
    printf("%d\n", sizeof(a[100]));
    printf("%d\n", sizeof(&a));
    printf("%d\n  ---- \n", sizeof(&a[0]));
    printf("%d\n", sizeof(b));
    printf("%d\n", i);
    printf("%d\n", j);

    unsigned i1 ;
    for (i1=9; i1>=0; i1--)
    {
        printf("%u\n",i);
    }

    return 0;
}
