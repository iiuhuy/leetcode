// VideoCapture.cpp : Defines the entry point for the console application.
// VideoCapture 类 是 OpenCV 2.x 中新增的一个类. 作用是 : 从视频文件或从摄像头捕获视频并显示出来.

#include "stdafx.h"
#include <opencv2\opencv.hpp>
using namespace cv;



int main()
{
	// 读入视频, 两种方式.
	//VideoCapture capture;
	//capture.open("1.avi");	// 第一种方式

	VideoCapture capture("2.mp4");	// 第二种方式, 这种较方便

	// 循环显示每一帧
	while(1)
	{
		Mat	frame;		// 定义一个 Mat 变量储存每一帧的图像.
		capture>>frame;	// 读取当前帧

		// 若视频读取完, 则退出循环
		if(frame.empty())
		{	
			break;
		}

		imshow("当前的视频", frame);		// 显示当前的一帧
		waitKey(50);
	}

	return 0;
}

