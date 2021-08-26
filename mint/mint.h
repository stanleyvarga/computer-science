#ifndef MINT_H
#define MINT_H
#define DEBUG 1

#define _assert(test)                                                           \
	do                                                                          \
	{                                                                           \
		if (!(test))                                                            \
		{                                                                       \
			printf("\n 🤬 %s | %s | line %d  \n", #test, __func__, __LINE__); \
			return 1;                                                           \
		}                                                                       \
	} while (0)
#define _run_tests(test) \
	do                   \
	{                    \
		int r = test();  \
		tests_run++;     \
		if (r)           \
			return r;    \
	} while (0)

extern int tests_run;
#endif