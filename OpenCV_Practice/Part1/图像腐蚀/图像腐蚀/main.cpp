// 图像腐蚀.cpp : Defines the entry point for the console application.
//

#include "stdafx.h"
#include <opencv2/highgui/highgui.hpp>	// opencv highgui 模块头文件
#include <opencv2/imgproc/imgproc.hpp>	// opencv 图像处理头文件

using namespace cv; 

int main()
{
	// 载入原图
	Mat srcImage = imread("1.jpg");

	// 显示原图
	imshow("【原图】腐蚀操作", srcImage);

	// 进行腐蚀操作
	Mat	element = getStructuringElement(MORPH_RECT, Size(11,11));
	Mat dstImagel;
	erode(srcImage, dstImagel, element);

	// 显示效果图
	imshow("【效果图】腐蚀操作", dstImagel);
	waitKey(0);

	return 0;
}

