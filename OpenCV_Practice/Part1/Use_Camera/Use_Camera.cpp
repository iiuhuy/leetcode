// Use_Camera.cpp : Defines the entry point for the console application.
// 使用摄像头, 采集图像.



#include "stdafx.h"
#include <opencv2\opencv.hpp>
using namespace cv;

int main( )
{
	// 从摄像头中读入视频
	VideoCapture capture(0);
	Mat	edges;	// 定义存储灰度化之后图片的变量

	while(1)
	{
		Mat	frame;		// 定义一个变量, 用于储存每一帧的图像.
		capture>>frame;// 读取当前帧
		imshow("读取的视频", frame);		// 显示当前帧


		//------ 增加其他效果显示 --------//
		// 将原图像转换为灰度图像.
		cvtColor(frame, edges, CV_BGR2GRAY);	// 转化 BGR 彩色图为灰度图

		// 将此句改为 OpenCV3 版为 : 
		//cvtColor(frame, edges, COLOR_BGR2GRAY);	// 转化 BGR 彩色图为灰度图

		// 使用 3x3 内核来降噪.
		blur(edges, edges, Size(7,7));	 // 模糊

		// 进行 Canny 边缘检测并显示.
		Canny(edges, edges, 0, 30, 3);
		imshow("canny 后的视频", edges);		

		//waitKey(30);    
		if(waitKey(30) >= 0)	break;
	}


	return 0;
}

