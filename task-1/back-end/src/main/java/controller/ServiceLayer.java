package controller;

import org.springframework.stereotype.Service;

@Service
public class ServiceLayer {
	
	
	
	//look at first elemetn in the array, if its zero
	//undestand user gave stupid input
	//in other cases think user gave decent input..
	public int[] get5Multiples(int nogiven)
	{
		int x[]=new int[5];
		
		for (int i = 0; i < x.length; i++) {
			x[i]= nogiven * (i+1);
		}
		return x;
	}

}
