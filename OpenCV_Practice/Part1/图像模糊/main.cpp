// 图像模糊.cpp : Defines the entry point for the console application.
// Opencv 对图片进行均值滤波, 模糊一幅图片。均值滤波函数 blur 函数。
// 创建练习于 2018.3.6  alvinmi

#include "stdafx.h"

#include <opencv2/highgui/highgui.hpp>
#include <opencv2/imgproc/imgproc.hpp>
using namespace cv;

int main()
{
	// 【载入原始图】
	Mat	srcImage = imread("1.jpg");

	// 【显示原始图片】
	imshow("均值滤波[原图]",srcImage);

	// 【进行均值滤波】
	Mat dstImage;
	blur(srcImage, dstImage, Size(10,24));

	// 【显示效果图】
	imshow("均值滤波【效果图】",dstImage);

	waitKey(0);


	return 0;
}

