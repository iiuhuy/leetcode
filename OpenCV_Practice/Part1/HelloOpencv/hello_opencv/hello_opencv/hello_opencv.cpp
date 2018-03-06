// hello_opencv.cpp : Defines the entry point for the console application.
//
#include "stdafx.h"
#include <opencv2/opencv.hpp>

using namespace cv;

//#pragma comment(lib, "opencv_calib3d2413d.lib")
int main()
{
	// 读取一张图片 载入最真实的图像
	Mat img = imread("1.jpg",	CV_LOAD_IMAGE_ANYDEPTH | CV_LOAD_IMAGE_ANYCOLOR);	

	imshow("载入最真实的图片", img);

	// 载入灰度图
	img = imread("1.jpg",0);		

	imshow("载入的灰度图", img);

	// 载入三通道的彩色图片

	Mat logo1 = imread("1.jpg", 4);
	imshow("载入3通道彩色图片", logo1);

	// 等待 6000 ms 后窗口自动关闭
	waitKey(8000);


	//return 0;
}

