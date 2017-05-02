#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(int argc, char** argv){
	int mysteryNumber = 0, guessNumber = 0;
	const int MAX = 100, MIN = 1;
	// 生成随机数
	srand(time(NULL));
	mysteryNumber = (rand() % (MAX - MIN + 1)) + MIN;
	// 程序的循环部分， 如果用户没有猜中数字， 就一直进行循环
	do {
		// 请求玩家输入所猜的数字
		printf("the number is what ?");
		scanf("%d", &guessNumber);
		// 比较输入的数字和随机的数字
		if (mysteryNumber > guessNumber)
			printf("猜小了，请再猜一次\n\n");
		else if (mysteryNumber < guessNumber)
			printf("猜大了，请再猜一次\n\n");
		else 
			printf("good ! 你太棒了\n\n");
	} while(guessNumber != mysteryNumber);
	return 0;
}
