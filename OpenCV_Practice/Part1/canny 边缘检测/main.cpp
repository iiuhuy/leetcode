// canny 边缘检测.cpp : Defines the entry point for the console application.
// canny 边缘检测, 载入图片, 将其转换为灰度图. 再用 blur 函数进行图像模糊以降噪, 然后用 canny 边缘检测.
// 创建练习于 2018.3.6		alvinmi

#include "stdafx.h"
#include <opencv2/opencv.hpp>
#include <opencv2/imgproc/imgproc.hpp>
using namespace cv;

int _tmain()
{
	// 载入原始图
	Mat	srcImage = imread("1.jpg");

	imshow("【原始图】Canny 边缘检测", srcImage);
	Mat	edge, grayImage;	// 参数定义
	
	// 将原图转换为灰度图像
	cvtColor(srcImage, grayImage, CV_BGR2GRAY);

	// 先使用 3x3 内核来降噪
	blur(grayImage, edge, Size(3,3));

	// 运行 Canny 算子
	Canny(edge, edge, 3, 9, 3);

	// 显示效果图
	imshow("【效果图】Canny 边缘检测",edge);

	waitKey(0);
	return 0;
}

